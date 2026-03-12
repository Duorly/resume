import { defineCachedEventHandler } from '#imports'

export default defineCachedEventHandler(async (event) => {
  const username = 'Duorly'
  
  try {
    // Fetch user profile
    const profileResponse = await fetch(`https://api.github.com/users/${username}`)
    if (!profileResponse.ok) throw new Error('Failed to fetch user profile')
    const profile = await profileResponse.json()

    // Fetch user repositories
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
    if (!reposResponse.ok) throw new Error('Failed to fetch user repositories')
    const repos = await reposResponse.json()

    // Calculate aggregated stats
    let totalStars = 0
    let totalForks = 0
    const languageCounts: Record<string, number> = {}

    // Filter out forks for more accurate stats of original work if desired, 
    // but usually people like to see all their repos.
    for (const repo of repos) {
      if (!repo.fork) {
        totalStars += repo.stargazers_count
        totalForks += repo.forks_count
        
        if (repo.language) {
          languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1
        }
      }
    }

    // Sort languages to get Top 5
    const topLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }))

    // Sort repositories to get Top 5 most starred
    const topRepos = repos
      .filter((r: any) => !r.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5)
      .map((r: any) => ({
        name: r.name,
        stars: r.stargazers_count,
        url: r.html_url,
        description: r.description
      }))

    // Fetch contributions (commits per year and heatmap data)
    let contributionsYears: Array<{ year: string, total: number }> = []
    let dailyContributions: Array<{ date: string, count: number, intensity: string }> = []
    
    try {
      const contribResponse = await fetch(`https://github-contributions.vercel.app/api/v1/${username}`)
      if (contribResponse.ok) {
        const contribData = await contribResponse.json()
        if (contribData && contribData.years) {
          contributionsYears = contribData.years
        }
        if (contribData && contribData.contributions) {
          // Filter last 365 days
          const today = new Date()
          const oneYearAgo = new Date()
          oneYearAgo.setDate(today.getDate() - 365)
          
          dailyContributions = contribData.contributions
            .filter((day: any) => {
              const d = new Date(day.date)
              return d >= oneYearAgo && d <= today
            })
            // Sort by date ascending
            .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
        }
      }
    } catch (e) {
      console.warn('Could not fetch contributions', e)
    }

    return {
      profile: {
        followers: profile.followers,
        public_repos: profile.public_repos,
        avatar_url: profile.avatar_url,
      },
      stats: {
        totalStars,
        totalForks,
      },
      topLanguages,
      topRepos,
      contributionsYears,
      dailyContributions
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return { error: 'Failed to fetch GitHub statistics' }
  }
}, {
  maxAge: 60 * 60, // Cache for 1 hour
  name: 'github-stats-duorly-v3', // Unique identifier
})

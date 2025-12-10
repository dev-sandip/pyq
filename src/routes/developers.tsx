import { Link, createFileRoute } from '@tanstack/react-router'
import { ChevronRight, ExternalLink, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export const Route = createFileRoute('/developers')({
  component: RouteComponent,
})
interface Contributor {
  id: number
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}
const GITHUB_OWNER = 'dev-sandip' // CHANGE THIS to your github username
const GITHUB_REPO = 'pyq' // CHANGE THIS to your repo name

function RouteComponent() {
  const [contributors, setContributors] = useState<Array<Contributor>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contributors`,
    )
      .then((res) => {
        if (!res.ok) throw new Error('Failed')
        return res.json()
      })
      .then((data) => {
        setContributors(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="flex items-center gap-4 mb-8">
        <Link
          to="/"
          className="p-2 rounded-full bg-bg-secondary hover:bg-border-subtle text-text-primary transition-colors"
        >
          <ChevronRight className="rotate-180" size={20} />
        </Link>
        <h2 className="font-header text-4xl font-bold text-text-primary">
          System Contributors
        </h2>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 font-mono text-center">
          Failed to load contributor data from GitHub. <br /> Check API Limits
          or Repo settings.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((dev, i) => (
            <motion.a
              key={dev.id}
              href={dev.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-bg-card border border-border-subtle rounded-xl hover:border-accent hover:shadow-lg transition-all group"
            >
              <img
                src={dev.avatar_url}
                alt={dev.login}
                className="w-12 h-12 rounded-full border-2 border-bg-secondary group-hover:border-accent transition-colors"
              />
              <div>
                <h3 className="font-header font-bold text-text-primary">
                  {dev.login}
                </h3>
                <div className="flex items-center gap-1 text-xs font-mono text-text-secondary">
                  <Terminal size={10} />
                  <span>{dev.contributions} Commits</span>
                </div>
              </div>
              <ExternalLink
                className="ml-auto text-text-secondary group-hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                size={16}
              />
            </motion.a>
          ))}
        </div>
      )}
    </div>
  )
}

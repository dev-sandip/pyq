import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ExternalLink, Github, Terminal } from 'lucide-react'

interface Contributor {
  id: number
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}
const GITHUB_OWNER = 'dev-sandip' // CHANGE THIS to your github username
const GITHUB_REPO = 'pyq' // CHANGE THIS to your repo name
const DevelopersView = ({ onGoBack }: { onGoBack: () => void }) => {
  const [owner, setOwner] = useState<Contributor | null>(null)
  const [contributors, setContributors] = useState<Array<Contributor>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch Owner Details
        const ownerRes = await fetch(
          `https://api.github.com/users/${GITHUB_OWNER}`,
        )
        const ownerData = await ownerRes.json()
        if (ownerData.id) setOwner(ownerData)

        // 2. Fetch Contributors
        const contribRes = await fetch(
          `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contributors`,
        )
        const contribData = await contribRes.json()
        if (Array.isArray(contribData)) {
          // Filter out the owner from contributors list to avoid duplication if needed
          setContributors(
            contribData.filter(
              (c) => c.login.toLowerCase() !== GITHUB_OWNER.toLowerCase(),
            ),
          )
        }
      } catch (e) {
        console.error('Failed to fetch developer data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-6xl mx-auto pt-32 px-6 pb-20"
    >
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onGoBack}
          className="p-2 rounded-full bg-bg-secondary hover:bg-border-subtle transition-colors"
        >
          <ArrowRight className="rotate-180" size={20} />
        </button>
        <h2 className="font-header text-3xl font-bold text-text-primary">
          Development Team
        </h2>
      </div>

      {loading ? (
        <div className="py-20 text-center font-mono text-text-secondary animate-pulse">
          SYNCING WITH GITHUB...
        </div>
      ) : (
        <div className="space-y-12">
          {/* OWNER SECTION */}
          {owner && (
            <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Github size={120} />
              </div>
              <h3 className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-6">
                Project Lead & Maintainer
              </h3>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                <img
                  src={owner.avatar_url}
                  alt={owner.login}
                  className="w-32 h-32 rounded-full border-4 border-bg-secondary shadow-xl"
                />
                <div className="text-center md:text-left space-y-2">
                  <h3 className="font-header text-3xl font-bold text-text-primary">
                    {owner.login}
                  </h3>
                  <a
                    href={owner.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span className="font-mono text-sm">@{owner.login}</span>
                    <ExternalLink size={12} />
                  </a>
                  <p className="max-w-lg text-text-secondary pt-2 text-sm leading-relaxed">
                    Lead developer and repository owner. Managing the core
                    infrastructure and features of the IOE Archive.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CONTRIBUTORS GRID */}
          {contributors.length > 0 && (
            <div>
              <h3 className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest mb-6 border-b border-border-subtle pb-2">
                Open Source Contributors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {contributors.map((dev, i) => (
                  <motion.a
                    key={dev.id}
                    href={dev.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 bg-bg-card border border-border-subtle rounded-xl hover:border-accent hover:shadow-md transition-all group"
                  >
                    <img
                      src={dev.avatar_url}
                      alt={dev.login}
                      className="w-10 h-10 rounded-full bg-bg-secondary"
                    />
                    <div className="overflow-hidden">
                      <h3 className="font-header font-bold text-text-primary truncate">
                        {dev.login}
                      </h3>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-text-secondary">
                        <Terminal size={10} />
                        <span>{dev.contributions} Commits</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}
export default DevelopersView

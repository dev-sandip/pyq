import { Link } from '@tanstack/react-router'
import { Database, Info, Moon, Sun, Users } from 'lucide-react'

const Header = ({
  toggleTheme,
  isDark,
}: {
  toggleTheme: () => void
  isDark: boolean
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-bg-card/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="p-2 bg-text-primary text-bg-primary rounded-lg shadow-sm group-hover:bg-accent group-hover:text-white transition-colors">
            <Database size={20} strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <h1 className="font-header font-bold text-xl tracking-wide text-text-primary leading-none">
              IOE <span className="text-accent">ARCHIVE</span>
            </h1>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="flex items-center gap-1 md:gap-2"
        >
          <Link
            to="/developers"
            activeOptions={{ exact: true }}
            activeProps={{
              className:
                'flex items-center gap-2 text-xs font-mono font-bold px-3 py-2 rounded-md transition-colors bg-bg-secondary text-accent',
            }}
            inactiveProps={{
              className:
                'flex items-center gap-2 text-xs font-mono font-bold px-3 py-2 rounded-md transition-colors text-text-secondary hover:text-text-primary hover:bg-bg-secondary',
            }}
          >
            <Users size={16} />
            <span className="hidden md:inline">DEV_TEAM</span>
          </Link>

          <Link
            to="/attribution"
            activeOptions={{ exact: true }}
            activeProps={{
              className:
                'flex items-center gap-2 text-xs font-mono font-bold px-3 py-2 rounded-md transition-colors bg-bg-secondary text-accent',
            }}
            inactiveProps={{
              className:
                'flex items-center gap-2 text-xs font-mono font-bold px-3 py-2 rounded-md transition-colors text-text-secondary hover:text-text-primary hover:bg-bg-secondary',
            }}
          >
            <Info size={16} />
            <span className="hidden md:inline">CREDITS</span>
          </Link>

          <div className="w-[1px] h-5 bg-border-subtle mx-2" />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
export default Header

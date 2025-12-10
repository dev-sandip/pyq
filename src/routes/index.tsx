import { createFileRoute } from '@tanstack/react-router'
import {
  ChevronRight,
  Command,
  FileText,
  Hash,
  Search,
  Sparkles,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { QuestionsData } from '@/data/questions'
import QuestionCard from '@/components/QuestionCard'
import { cn } from '@/lib/cn'
import Header from '@/components/Header'
import AttributionPage from '@/components/AttributionPage'
import AttributionView from '@/components/AttributionPage'
import DevelopersView from '@/components/Developers'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [view, setView] = useState<'home' | 'about' | 'developers'>('home')
  const [activeTab, setActiveTab] = useState<string>('1st_Semester')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [darkMode, setDarkMode] = useState(false)

  const semesters = Object.keys(QuestionsData)

  // Toggle Dark Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  // Global Search Logic
  const filteredQuestions = useMemo(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase()
      const allData = Object.entries(QuestionsData).flatMap(
        ([sem, questions]) => questions.map((q) => ({ ...q, semester: sem })),
      )
      return allData.filter((q) => q.text.toLowerCase().includes(query))
    }
    return QuestionsData[activeTab] || []
  }, [activeTab, searchQuery])

  return (
    <div className="min-h-screen w-full relative bg-bg-primary font-body text-text-primary transition-colors duration-300">
      {/* Subtle Grid Background (No Gradient Blobs) */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Header
        currentView={view}
        onNavigate={setView}
        toggleTheme={toggleTheme}
        isDark={darkMode}
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {/* VIEW: ABOUT */}
          {view === 'about' && (
            <AttributionView key="about" onGoBack={() => setView('home')} />
          )}

          {/* VIEW: DEVELOPERS */}
          {view === 'developers' && (
            <DevelopersView key="developers" onGoBack={() => setView('home')} />
          )}

          {/* VIEW: HOME */}
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-6 pt-10 pb-20"
            >
              <div className="pt-24 mb-10">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="max-w-2xl"
                >
                  <h2 className="font-header text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
                    Engineering <br />
                    <span className="text-text-secondary">Resources.</span>
                  </h2>

                  {/* Clean Search Input */}
                  <div className="relative group max-w-xl">
                    <div className="relative flex items-center bg-bg-card border border-border-subtle rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent transition-all">
                      <Search className="ml-4 text-text-secondary" size={20} />
                      <input
                        type="text"
                        placeholder="Search subjects (Global Search)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent text-text-primary font-body text-base py-4 px-3 focus:outline-none placeholder:text-text-secondary/50"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="mr-4 text-text-secondary hover:text-text-primary"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Tabs */}
              <AnimatePresence>
                {!searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8"
                  >
                    <div className="flex flex-wrap gap-2 pb-4 border-b border-border-subtle">
                      {semesters.map((sem) => {
                        const isActive = activeTab === sem
                        return (
                          <button
                            key={sem}
                            onClick={() => setActiveTab(sem)}
                            className={cn(
                              'relative px-4 py-2 rounded text-sm font-header font-bold transition-all duration-200',
                              isActive
                                ? 'bg-text-primary text-bg-primary'
                                : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary',
                            )}
                          >
                            {sem.replace(/_/g, ' ')}
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Results Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Hash size={14} className="text-accent" />
                  <span className="font-mono text-xs font-bold uppercase text-text-secondary">
                    {searchQuery
                      ? `Global Results`
                      : activeTab.replace(/_/g, ' ')}
                  </span>
                </div>
                <span className="font-mono text-xs text-text-secondary">
                  {filteredQuestions.length} files
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* mode="popLayout" allows new items to render while old ones exit */}
                <AnimatePresence mode="popLayout">
                  {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((q, idx) => (
                      <QuestionCard
                        key={`${q.text}-${q.semester || activeTab}`} // Unique key ensures React recycles components correctly
                        item={q}
                        index={idx}
                        showContext={!!searchQuery}
                      />
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="col-span-full py-20 text-center border border-dashed border-border-subtle rounded-xl bg-bg-secondary/30"
                    >
                      <h3 className="font-header text-lg font-bold text-text-primary">
                        No Matching Resources
                      </h3>
                      <p className="text-text-secondary text-sm mt-1">
                        Try a different keyword.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

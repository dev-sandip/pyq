import { createFileRoute } from '@tanstack/react-router'
import { Hash, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { QuestionsCollection } from '@/types'
import { QuestionsData } from '@/data/questions'
import QuestionCard from '@/components/QuestionCard'
import { cn } from '@/lib/cn'
import { buildSeo } from '@/lib/seo'

const semesterCount = Object.keys(QuestionsData).length
const totalResourceCount = Object.values(QuestionsData).reduce(
  (count, items) => count + items.length,
  0,
)

export const Route = createFileRoute('/')({
  head: () =>
    buildSeo({
      title: 'IOE Archive | Past Questions and Resources',
      description: `Browse ${totalResourceCount} IOE past-question resources across ${semesterCount} semesters, electives, and engineering subjects in one searchable archive.`,
      path: '/',
      keywords: [
        'IOE past questions',
        'IOE archive',
        'engineering question bank',
        'Nepal engineering resources',
        'semester question collection',
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            name: 'IOE Archive',
            url: 'https://dev-sandip.github.io/pyq/',
            description:
              'Searchable archive of IOE past questions and study resources.',
          },
          {
            '@type': 'CollectionPage',
            name: 'IOE Archive PYQ Collection',
            url: 'https://dev-sandip.github.io/pyq/',
            isPartOf: {
              '@type': 'WebSite',
              name: 'IOE Archive',
              url: 'https://dev-sandip.github.io/pyq/',
            },
            about: 'IOE past questions, semester resources, and engineering subjects',
          },
        ],
      },
    }),
  component: App,
})

function App() {
  const [activeTab, setActiveTab] = useState<string>('1st_Semester')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const semesters = Object.keys(QuestionsData)
  const normalizedQuery = searchQuery.trim().toLowerCase()

  const allQuestions = useMemo(() => {
    return Object.entries(QuestionsData as QuestionsCollection).flatMap(
      ([semester, questions]) =>
        questions.map((q) => ({
          ...q,
          semester,
        })),
    )
  }, [])

  const filteredQuestions = useMemo(() => {
    if (normalizedQuery) {
      return allQuestions.filter((q) =>
        q.text.toLowerCase().includes(normalizedQuery),
      )
    }

    return (QuestionsData as QuestionsCollection)[activeTab] ?? []
  }, [activeTab, normalizedQuery, allQuestions])

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

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-24"
        >
          <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="max-w-3xl"
            >
              <h1 className="font-header text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
                IOE past questions,
                <br />
                <span className="text-text-secondary">organized to study fast.</span>
              </h1>
              <p className="max-w-2xl text-base md:text-lg text-text-secondary leading-relaxed">
                Search a curated archive of past-question PDFs and engineering
                resources for IOE students. Browse {totalResourceCount} resources
                across {semesterCount} semesters and elective collections from one
                index.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border-subtle bg-bg-card px-4 py-3">
                <p className="font-mono text-xs uppercase text-text-secondary">
                  Semesters
                </p>
                <p className="font-header text-2xl text-text-primary">
                  {semesterCount}
                </p>
              </div>
              <div className="rounded-xl border border-border-subtle bg-bg-card px-4 py-3">
                <p className="font-mono text-xs uppercase text-text-secondary">
                  Resources
                </p>
                <p className="font-header text-2xl text-text-primary">
                  {totalResourceCount}
                </p>
              </div>
              <div className="rounded-xl border border-border-subtle bg-bg-card px-4 py-3 col-span-2 sm:col-span-1">
                <p className="font-mono text-xs uppercase text-text-secondary">
                  Focus
                </p>
                <p className="font-header text-2xl text-text-primary">PYQ</p>
              </div>
            </div>
          </div>

          <section aria-labelledby="resource-search" className="mb-10">
            <h2 id="resource-search" className="sr-only">
              Search archive resources
            </h2>

            <div className="relative group max-w-xl">
              <div className="relative flex items-center bg-bg-card border border-border-subtle rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-accent focus-within:border-transparent transition-all">
                <Search className="ml-4 text-text-secondary" size={20} />
                <input
                  type="search"
                  aria-label="Search subjects and question collections"
                  placeholder="Search subjects (Global Search)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-text-primary font-body text-base py-4 px-3 focus:outline-none placeholder:text-text-secondary/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mr-4 text-text-secondary hover:text-text-primary"
                    aria-label="Clear search query"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </section>

          <AnimatePresence>
            {!searchQuery && (
              <motion.section
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
                aria-labelledby="semester-filter"
              >
                <h2
                  id="semester-filter"
                  className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-text-secondary"
                >
                  Browse by semester
                </h2>
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
              </motion.section>
            )}
          </AnimatePresence>

          <section aria-labelledby="resource-results">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Hash size={14} className="text-accent" />
                <h2
                  id="resource-results"
                  className="font-mono text-xs font-bold uppercase text-text-secondary"
                >
                  {searchQuery ? 'Global Results' : activeTab.replace(/_/g, ' ')}
                </h2>
              </div>
              <span className="font-mono text-xs text-text-secondary">
                {filteredQuestions.length} resources
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((q, idx) => (
                    <QuestionCard
                      key={`${q.text}-${q.semester || activeTab}`}
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
          </section>
        </motion.div>
      </main>
    </div>
  )
}

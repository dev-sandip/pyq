import { Link, createFileRoute  } from '@tanstack/react-router'
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export const Route = createFileRoute('/attribution')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto pt-32"
      >
        <div className="p-4 bg-accent/10 rounded-full mb-8">
          <Sparkles className="text-accent" size={48} />
        </div>

        <h2 className="font-header text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Attribution & <span className="text-accent">Ownership</span>
        </h2>

        <div className="bg-bg-card border border-border-subtle p-8 rounded-2xl shadow-xl w-full mb-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-accent" />

          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            The question collection data provided in this application is sourced
            directly from
            <strong className="text-text-primary"> Digital NCE</strong>. Full
            ownership, copyrights, and intellectual property rights of the
            content belong to them.
          </p>

          <p className="text-text-secondary text-sm mb-8">
            This platform serves purely as a modern, enhanced User Interface
            (UI) to facilitate easier searching, filtering, and previewing of
            these valuable resources for IOE students.
          </p>

          <a
            href="https://digitalnce.com/ioe_questions/?p=question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-text-primary text-bg-primary rounded-xl font-bold hover:bg-accent hover:text-white transition-all duration-300 group-hover:scale-[1.02]"
          >
            <span>Visit Original Source</span>
            <ExternalLink size={18} />
          </a>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors font-mono text-sm"
        >
          <ArrowRight className="rotate-180" size={16} />
          RETURN TO ARCHIVE
        </Link>
      </motion.div>
    </>
  )
}

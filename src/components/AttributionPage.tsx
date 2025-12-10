import { ExternalLink, Info } from 'lucide-react'
import { motion } from 'motion/react'

const AttributionView = ({ onGoBack }: { onGoBack: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto pt-20"
  >
    <div className="p-4 bg-bg-secondary rounded-full mb-6">
      <Info className="text-text-primary" size={40} />
    </div>

    <h2 className="font-header text-3xl md:text-4xl font-bold text-text-primary mb-6">
      Data Attribution
    </h2>

    <div className="bg-bg-card border border-border-subtle p-8 rounded-xl shadow-sm w-full mb-8 text-left">
      <p className="text-text-secondary text-sm font-mono mb-4 uppercase tracking-widest border-b border-border-subtle pb-2">
        Source Declaration
      </p>
      <p className="text-text-primary text-lg mb-4">
        All question collections and educational resources found on this
        platform are owned by{' '}
        <strong className="text-accent">Digital NCE</strong>.
      </p>
      <p className="text-text-secondary text-sm mb-6 leading-relaxed">
        This application acts solely as an alternative interface to browse these
        resources. We claim no ownership over the PDF files or their contents.
      </p>

      <a
        href="https://digitalnce.com/ioe_questions/?p=question"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline decoration-2 underline-offset-4"
      >
        <span>VISIT DIGITAL NCE</span>
        <ExternalLink size={14} />
      </a>
    </div>

    <button
      onClick={onGoBack}
      className="text-text-secondary hover:text-text-primary transition-colors font-mono text-sm underline underline-offset-4"
    >
      Return to Dashboard
    </button>
  </motion.div>
)
export default AttributionView

import Overview from './sections/Overview'
import TaskWorkflow from './sections/TaskWorkflow'
import BestPractices from './sections/BestPractices'
import Resources from './sections/Resources'
import './ContentArea.css'

function ContentArea({ activeSection }) {
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />
      case 'task-workflow':
        return <TaskWorkflow />
      case 'best-practices':
        return <BestPractices />
      case 'resources':
        return <Resources />
      default:
        return <Overview />
    }
  }

  return (
    <main className="content-area">
      <div className="content-container">
        {renderContent()}
      </div>
    </main>
  )
}

export default ContentArea

import './Sidebar.css'

const sections = [
  { id: 'overview', label: 'Overview', icon: '📋' },
  { id: 'quick-start', label: 'High-Level Workflow', icon: '🚀' },
  { id: 'task-workflow', label: 'Detailed Workflow', icon: '⚙️' },
  { id: 'automated-evals', label: 'Automated Evals', icon: '🤖' },
  { id: 'review-guidelines', label: 'Review Guidelines', icon: '📝' },
  { id: 'best-practices', label: 'Best Practices', icon: '⭐' },
  { id: 'office-hours', label: 'Office Hours', icon: '📹' },
  { id: 'example-task', label: 'Example Task', icon: '📄' },
]

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="sidebar-icon">{section.icon}</span>
                <span className="sidebar-label">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="support-contacts">
          <h3 className="support-title">Support Contacts</h3>
          <p className="support-text">
            If you have not received your alias email or encounter any issues, please contact:
          </p>
              <ul className="support-list">
                <li>Alejandro Sanchez or Randi Mariakis</li>
              </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

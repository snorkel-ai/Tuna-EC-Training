import './Sidebar.css'

const sections = [
  { id: 'overview', label: 'Overview', icon: '📋' },
  { id: 'task-workflow', label: 'Task Workflow', icon: '⚙️' },
  { id: 'best-practices', label: 'Best Practices', icon: '⭐' },
  { id: 'resources', label: 'Resources', icon: '📚' },
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
    </aside>
  )
}

export default Sidebar

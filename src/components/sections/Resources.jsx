import './Section.css'

function Resources() {
  return (
    <div className="section">
      <h1 className="section-title">Resources</h1>
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Video Walkthrough</h2>
          <p>
            Watch the video walkthrough to see the evaluation process in action:
          </p>
          <p>
            <a 
              href="https://www.loom.com/share/56d1157b51764db4bb80eb815960a83d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link">
              Video Walkthrough Link
            </a>
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Final Submission Step on Snorkel Platform</h2>
          <p className="note">
            <strong>Important:</strong> A final submission step will be added to the Snorkel platform. 
            This step will be used to record and finalize your evaluation work.
          </p>
          <p className="note">
            <strong>⚠️ Key takeaway:</strong> Completing this step will be required to receive compensation.
          </p>
          
          <h3 className="subsection-title">What to Expect</h3>
          <p>
            After completing your evaluation tasks, return to Snorkel's platform and locate the final
            submission task.
          </p>
          <p>
            You will be asked to answer a short set of questions to confirm and complete your work.
          </p>

          <h3 className="subsection-title">Questions You May Be Asked</h3>
          <p>Expect questions similar to the following:</p>
          <ul className="bullet-list">
            <li>Approximately how long did it take you to complete the task?</li>
            <li>Did you encounter any nuances, edge cases, or platform issues you would like to call out
            (e.g., unclear instructions, UI issues, or model behavior patterns)?</li>
          </ul>

          <p>All responses will be reviewed to ensure:</p>
          <ul className="bullet-list">
            <li>Evaluation instructions were followed correctly</li>
            <li>Ratings and selections are internally consistent</li>
            <li>Explanations are clear and justified</li>
          </ul>

          <p className="note">
            <strong>⚠️ Key takeaway:</strong> This step is confirmation-only. No additional work, files, or modifications are
            required beyond what was already completed during evaluation.
          </p>
          <p className="note-text">
            This workflow is not live yet. Until it becomes available, follow only the active instructions shown
            on the Snorkel platform.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Project Information</h2>
          <ul className="bullet-list">
            <li><strong>Project Name:</strong> Project Tuna</li>
            <li><strong>Version:</strong> 1.0</li>
            <li><strong>Last Updated:</strong> December 17, 2025</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="card-title">Support Contacts</h2>
          <p>
            If you have not received your alias email or encounter any issues, please contact:
          </p>
          <ul className="bullet-list">
            <li>Christian Arroyo</li>
            <li>Juan Pablo Chong</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resources

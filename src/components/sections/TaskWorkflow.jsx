import './Section.css'

function TaskWorkflow() {
  return (
    <div className="section">
      <h1 className="section-title">Task Workflow</h1>
      <div className="section-content">
        <div className="card">
          <h2 className="card-title">Setup</h2>
          <p className="note">
            <strong>Note:</strong> If you get timed out on the platform and get error 409, please open the tool in
            incognito mode to keep working on the tasks or try to use the skip button to keep tasking.
          </p>
          <p>
            To begin tasking on the platform, you'll receive an alias email address at your registered email.
          </p>
          <ol className="step-list">
            <li>
              Log in using your alias email at:
              <br />
              <a href="https://feedback.anthropic.com/surveyor/prwriter_snorkel?email_login=true" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="link">
                https://feedback.anthropic.com/surveyor/prwriter_snorkel?email_login=true
              </a>
              <br />
              <span className="note-text">If presented with a "login with Google" option, do not choose it, it will not work.</span>
            </li>
            <li>You'll receive an email verification code at your personal email. Enter that code to complete login and start tasking.</li>
          </ol>
          <p className="note">
            <strong>Important:</strong> The initial assessment is just the one task on the Snorkel platform. Once that's approved
            and you move to the customer platform those are the real project tasks. Please take your time
            here, your work is still reviewed.
          </p>
          <p className="note">
            <strong>Note:</strong> If you have not received your alias, flag it to Christian Arroyo or Juan Pablo Chong.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Step 1: Capability Check</h2>
          <p>
            At the top of the task, you will see the user's initial prompt, followed by a conversation history.
            This is all just to give you context on the conversation so far. The only prompt you will
            evaluate is the final user message at the bottom of the conversation field.
          </p>
          <p className="note">
            <strong>NOTE:</strong> The prompt you need to review will be at the bottom of the prompt.
          </p>
          <p>You will have further context and files on the platform.</p>
          <p>
            Before evaluating anything else, confirm whether you can reasonably evaluate the task.
          </p>
          <p><strong>Select "Yes, I can evaluate this task" if:</strong></p>
          <ul className="bullet-list">
            <li>The task prompt is understandable</li>
            <li>Required files or context are present</li>
            <li>You are familiar with the programming language or domain</li>
          </ul>
          <p><strong>Select "No – technical issues only" if:</strong></p>
          <ul className="bullet-list">
            <li>The task is fundamentally broken</li>
            <li>The task cannot be evaluated by anyone</li>
          </ul>
          <p>If you select No, you must clearly explain why the task could not be completed.</p>
        </div>

        <div className="card">
          <h2 className="card-title">Step 2: Prompt Quality Rating (1–5)</h2>
          <p>
            Next, rate the quality of the task prompt itself.
            This rating is only about the prompt, not the model responses.
          </p>
          <p><strong>Use the following scale:</strong></p>
          <div className="rating-scale">
            <div className="rating-item">
              <strong>1–2 (Poor)</strong>
              <ul className="bullet-list">
                <li>Missing required inputs</li>
                <li>Unrealistic or impossible task</li>
                <li>Requests information the model cannot access</li>
              </ul>
            </div>
            <div className="rating-item">
              <strong>3 (Adequate)</strong>
              <ul className="bullet-list">
                <li>Task is doable but underspecified or too simple</li>
                <li>Provides weak signal for evaluating an AI assistant</li>
              </ul>
            </div>
            <div className="rating-item">
              <strong>4–5 (Good)</strong>
              <ul className="bullet-list">
                <li>Realistic and representative of real engineering work</li>
                <li>Clear requirements and sufficient context</li>
                <li>Challenging but solvable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Step 3: Weakness Categories</h2>
          <p className="note">
            <strong>Read Before Evaluating Responses</strong>
          </p>
          <p>
            Before reviewing Response A or Response B, familiarize yourself with the weakness categories
            below. You will apply these categories only when they clearly apply, and you must explain
            each issue precisely.
          </p>
          <p className="note">
            <strong>Note:</strong> The examples below are illustrative, not exhaustive. They are meant to clarify how each
            category can appear, but similar issues may fall under the same category even if they are not
            listed here. Evaluators should rely on their judgment, technical expertise, and the task context
            when categorizing errors.
          </p>
          <p>
            <strong>Weakness Categories</strong>
          </p>
          <p className="note-text">
            Only select categories that clearly apply. If no categories apply, omit the step.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Step 4: Evaluate Response A</h2>
          <p>Evaluate Response A on its own merits.</p>
          
          <h3 className="subsection-title">Strengths of Response A</h3>
          <p>Describe what the response does well. Focus on:</p>
          <ul className="bullet-list">
            <li>Correct understanding of the task</li>
            <li>Meaningful progress toward a solution</li>
            <li>Appropriate use of tools or assumptions</li>
            <li>Alignment between claims and actual work</li>
          </ul>

          <h3 className="subsection-title">Weaknesses of Response A</h3>
          <p>If applicable:</p>
          <ul className="bullet-list">
            <li>Select the relevant weakness categories</li>
            <li>Clearly explain each issue</li>
            <li>Reference observable evidence in the response</li>
          </ul>
          <p>If no weaknesses apply, state why.</p>
        </div>

        <div className="card">
          <h2 className="card-title">Step 5: Evaluate Response B</h2>
          <p>
            Repeat the same evaluation process used for Response A.
            Apply the same standards and level of scrutiny.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Step 6: Compare Responses</h2>
          <p>
            You will now compare Response A and Response B across several questions using a 1–8
            scale.
          </p>
          <p className="note">
            Each question is independent. Do not assume the same score applies everywhere.
          </p>
          
          <h3 className="subsection-title">Comparison Questions</h3>
          <ul className="bullet-list">
            <li><strong>Which response is better overall?</strong> Your holistic judgment based on correctness, usefulness, and readiness to move forward.</li>
            <li><strong>Which code has better naming and clarity?</strong> If no code is written, judge clarity of explanations and proposed changes.</li>
            <li><strong>Which code has better organization and modularity?</strong> Logical structure, separation of concerns, and scalability.</li>
            <li><strong>Which code has better error handling and robustness?</strong> Anticipation of edge cases, diagnostics, and failure modes.</li>
            <li><strong>Which code has better comments and documentation?</strong> Useful explanations without unnecessary verbosity.</li>
            <li><strong>Which code is more ready for review or merge?</strong> Completeness, minimal remaining gaps, and reviewability.</li>
            <li><strong>Which code has better logic and correctness?</strong> Sound reasoning and alignment with the task requirements.</li>
            <li><strong>Which response is more honest about what it actually did?</strong> Clear distinction between implemented work and proposals.</li>
            <li><strong>Which response follows the instructions better?</strong> Full adherence to user and system constraints.</li>
          </ul>

          <h3 className="subsection-title">Rating Scale</h3>
          <ul className="bullet-list">
            <li><strong>1–2:</strong> Response A is clearly better</li>
            <li><strong>4–5:</strong> Responses are roughly equal</li>
            <li><strong>7–8:</strong> Response B is clearly better</li>
          </ul>
          <p className="note">
            You must make a relative judgment, even if both responses are flawed.
          </p>

          <h3 className="subsection-title">Additional Comments (Optional)</h3>
          <p>Use this section to:</p>
          <ul className="bullet-list">
            <li>Call out important tradeoffs</li>
            <li>Explain edge cases that influenced your decision</li>
            <li>Add context that is not captured elsewhere</li>
          </ul>
          <p>Do not repeat earlier critiques unless necessary.</p>
        </div>
      </div>
    </div>
  )
}

export default TaskWorkflow

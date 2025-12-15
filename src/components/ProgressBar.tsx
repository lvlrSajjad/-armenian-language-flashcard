import './ProgressBar.css';

interface ProgressBarProps {
  learning: number;
  reviewing: number;
  mastered: number;
}

export const ProgressBar = ({ learning, reviewing, mastered }: ProgressBarProps) => {
  const total = learning + reviewing + mastered;

  return (
    <div className="progress-container">
      {/*<div className="progress-stats">*/}
      {/*  <div className="stat-item learning">*/}
      {/*    <div className="stat-label">Learning</div>*/}
      {/*    <div className="stat-value">{learning} words</div>*/}
      {/*  </div>*/}
      {/*  <div className="stat-item reviewing">*/}
      {/*    <div className="stat-label">Reviewing</div>*/}
      {/*    <div className="stat-value">{reviewing} words</div>*/}
      {/*  </div>*/}
      {/*  <div className="stat-item mastered">*/}
      {/*    <div className="stat-label">Mastered</div>*/}
      {/*    <div className="stat-value">{mastered} words</div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="progress-bars">
        <div className="progress-bar-wrapper">
          <div className="progress-bar-label">
            You are learning {learning} out of {total} words
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill learning-fill"
              style={{ width: `${total > 0 ? (learning / total) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className="progress-bar-wrapper">
          <div className="progress-bar-label">
            You are reviewing {reviewing} out of {total} words
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill reviewing-fill"
              style={{ width: `${total > 0 ? (reviewing / total) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className="progress-bar-wrapper">
          <div className="progress-bar-label">
            You have mastered {mastered} out of {total} words
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill mastered-fill"
              style={{ width: `${total > 0 ? (mastered / total) * 100 : 0}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


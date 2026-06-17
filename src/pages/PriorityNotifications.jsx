import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationCard from "../components/NotificationCard";
import { notifications } from "../services/notificationService";

function PriorityNotifications() {
  const [topN, setTopN] = useState(10);

  const weights = {
    placement: 3,
    result: 2,
    event: 1,
  };

  const priorityNotifications =
    [...notifications]
      .sort((a, b) => {
        const weightDiff =
          weights[b.type] -
          weights[a.type];

        if (weightDiff !== 0) {
          return weightDiff;
        }

        return (
          new Date(b.timestamp) -
          new Date(a.timestamp)
        );
      })
      .slice(0, topN);

  return (
    <div className="container">
      <Link
        to="/notifications"
        className="nav-btn"
      >
        Go To All Notifications
      </Link>

      <h2 className="page-title">
        Priority Notifications (
        {priorityNotifications.length})
      </h2>

      <div className="top-section">
        <label>
          Top Notifications:
        </label>

        <select
          value={topN}
          onChange={(e) =>
            setTopN(
              Number(e.target.value)
            )
          }
        >
          <option value={10}>
            Top 10
          </option>

          <option value={15}>
            Top 15
          </option>

          <option value={20}>
            Top 20
          </option>
        </select>
      </div>

      {priorityNotifications.map(
        (item) => (
          <NotificationCard
            key={item.id}
            notification={item}
          />
        )
      )}
    </div>
  );
}

export default PriorityNotifications;
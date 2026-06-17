import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationCard from "../components/NotificationCard";
import { notifications } from "../services/notificationService";

function AllNotifications() {
  const [filter, setFilter] = useState("all");

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter(
          (item) => item.type === filter
        );

  return (
    <div className="container">
      <Link
        to="/priority"
        className="nav-btn"
      >
        Go To Priority Notifications
      </Link>

      <h2 className="page-title">
        All Notifications (
        {filteredNotifications.length})
      </h2>

      <div className="filter-section">
        <label>Filter: </label>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option value="all">
            All
          </option>

          <option value="placement">
            Placement
          </option>

          <option value="result">
            Result
          </option>

          <option value="event">
            Event
          </option>
        </select>
      </div>

      {filteredNotifications.map((item) => (
        <NotificationCard
          key={item.id}
          notification={item}
        />
      ))}
    </div>
  );
}

export default AllNotifications;
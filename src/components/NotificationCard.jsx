import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.title}
        </Typography>

        <Typography>
          Type: {notification.type}
        </Typography>

        <Typography>
          Score: {notification.score}
        </Typography>

        <Chip
          label={
            notification.viewed
              ? "Viewed"
              : "New"
          }
          color={
            notification.viewed
              ? "success"
              : "error"
          }
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
}

export default NotificationCard;
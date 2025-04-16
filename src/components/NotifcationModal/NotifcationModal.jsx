import { useEffect } from "react";

const NotificationModal = () => {
  useEffect(() => {
    const modal = new window.bootstrap.Modal(document.getElementById("notificationModal"));
    modal.show();
  }, []);

  return (
    <div className="modal fade" id="notificationModal" tabIndex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="notificationModalLabel">📢 Important Notification</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            🎉 <strong>PathShala</strong> Classes are going to start soon!<br />
            🏆 NEET & JEE offline classes now available in <strong>Beoharo</strong>.<br />
            🔔 Stay tuned for more updates!
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;

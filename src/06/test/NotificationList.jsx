import React from "react";
import Notification from "./Notification";
import "./Notification.css";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 여러분, 반갑습니다."
    },
    {
        id: 2,
        message: "오늘은 10월을 시작하는 날입니다."
    },
    {
        id: 3,
        message: "오늘 기분은 어떠신가요?"
    },
    {
        id: 4,
        message: "만약 우울하시다면 기분 전환될 생각을 해보세요."
    },
    {
        id: 5,
        message: "내일은 더 좋은 일이 생길 거예요."
    }
];

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const { notifications } = this.state;

            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;

                this.setState({
                    notifications: [
                        ...notifications,
                        reservedNotifications[index]
                    ]
                });
            } else {
                clearInterval(this.timer);
            }
        }, 3000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className="tarot-container">
                <div className="tarot-header">
                    <p className="tarot-subtitle">✦ Mystic Notification ✦</p>
                    <h1 className="tarot-main-title">Tarot Messages</h1>
                    <p className="tarot-desc">운명의 카드가 천천히 펼쳐집니다</p>
                </div>

                <div className="notification-list">
                    {this.state.notifications.map((notification) => {
                        return (
                            <Notification
                                key={notification.id}
                                id={notification.id}
                                message={notification.message}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default NotificationList;

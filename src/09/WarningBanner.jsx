function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }

    return (
        <div className="warning-banner">
            WARNING! Unauthorized access detected.
        </div>
    );
}

export default WarningBanner;
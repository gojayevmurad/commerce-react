export const showInvalidMessage = (message, touched) => {
    return message && touched ? (
        <p className="invalid_message">{message}</p>
    ) : null;
};

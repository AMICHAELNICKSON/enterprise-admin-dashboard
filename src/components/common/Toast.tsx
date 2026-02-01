type Props = {
    message: string
}

function Toast({message}: Props) {

    return (
        <div
            className="toast show position-fixed bottom-0 end-0 m-3"
            role="alert"
        >
            <div className="toast-body">{message}</div>
        </div>
    )

}

export default Toast
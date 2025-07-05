import error from "../assets/error.svg"

export default function Error () {
    return (
        <div>
            <img src={error} alt="" />
            <p>Ooops, 404</p>
            <p>You can return to the main page <a href="/Shopping-Cart">click</a></p>
        </div>
    )
}
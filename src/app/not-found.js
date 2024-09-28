import {Divider} from "@nextui-org/react";

export default function NotFound() {
    return <div className={'h-screen flex flex-col justify-center items-center'}>
        <h1>404</h1>
        <Divider />
        <p>Page not found.</p>
    </div>
}
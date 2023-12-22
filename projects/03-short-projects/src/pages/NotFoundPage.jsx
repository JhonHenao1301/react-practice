
export default function NotFoundPage () {
    return ( 
        <div className="flex flex-col items-center gap-6">
            <h1 className="text-lg font-bold">Page not found</h1>
            <p>Please try a new route</p>
            <img 
                src="/public/404-error.jpg"
                className="rounded-lg" 
                alt="Not found page" />
        </div>
    )
}
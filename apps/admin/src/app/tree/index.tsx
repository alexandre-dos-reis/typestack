        import { root } from "../components/Layout"

        export const indexRoute = root.createRoute({
            path: '/',
            component: () => {
            return (
                <div className="p-2">
                <h3>Welcome Home!</h3>
                </div>
            )
            },
        })
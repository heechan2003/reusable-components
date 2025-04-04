import Banner from "../reusables/Banner/Banner"

export default function Banners() {
    return (
        <div className="page-wrap banner-page">
            <h2>Banners</h2>
            <div className="component-wrap banners-wrap">
                <h3>Success</h3>
                <Banner 
                    status="success" 
                    title="Congratulations"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, voluptatibus?"
                >
                </Banner>
                <h3>Warning</h3>
                <Banner 
                    status="warning" 
                    title="Attention"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, voluptatibus?"
                >
                </Banner>
                <h3>Error</h3>
                <Banner
                    status="error" 
                    title="There is a problem with your application"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, voluptatibus?"
                >
                </Banner>
                <h3>Info</h3>
                <Banner 
                    status="info" 
                    title="Update Available"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, voluptatibus?"
                >
                </Banner>
            </div>
        </div>
    )
}
import './ItemAboutUs.css'

const ItemAboutUs = ({data}) => {
    console.log(data)
    const {classCont, classImg, src, alt, title, itemTxt} = data;
    return (
        <div className={classCont}>
            <div className={classImg}>
                <img src={src} alt={alt} />
            </div>
            <h4>{title}</h4>
            <p>{itemTxt}</p>
        </div>
    )
}

export { ItemAboutUs };
import Footer from "../model/Footer";

interface FooterItemProps {
    footer: Footer
}

export default function FooterItem(props: FooterItemProps) {
    const { footer } = props;
    return (
        <div className="mr-10 py-10 w-52">
            <img src={footer.imagem} alt={footer.descricao} />
        </div>
    )
}
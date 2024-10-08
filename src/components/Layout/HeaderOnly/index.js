import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div class="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

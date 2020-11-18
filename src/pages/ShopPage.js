import React, { useState } from 'react';

import Header from '../components/Header';
import ShopList from '../components/ShopList';
import Footer from '../components/Footer';

export default function ShopPage() {

    const [selected, setSelected] = useState([]);

    return (
        <>
            <Header />
            <ShopList selected={selected} setSelected={setSelected} />
            {selected.length !== 0
                ? <Footer />
                : ''
            }
        </>
    );
}
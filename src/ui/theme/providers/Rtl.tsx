import React, {ReactNode} from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
function Rtl({children}: {children: ReactNode}) {
    return (
        <CacheProvider value={cacheRtl}>
            {children}
        </CacheProvider>
    );
}

export default Rtl;
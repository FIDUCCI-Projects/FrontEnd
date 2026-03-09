export interface ProjectItem {
    id: string; // The slug (e.g., 'genesis-puebla')
    title: string;
    location: {
        short: string;
        full: string;
        coordinates: string;
    };
    specs: {
        area: string;
        type: string;
        pricePerToken: number;
        totalValue: string;
    };
    thesis: {
        description: string;
        acquisitionCost: string;
        spreadFunction: string;
    };
    legal: {
        documentName: string;
        fiduciary: string;
        folio: string;
        notary: string;
    };
    tokenomics: {
        ticker: string;
        parity: string;
        supply: string;
        distribution: {
            owner: string;
            core: string;
            allies: string;
            reserve: string;
        };
    };
    exitStrategy: {
        model: string;
        horizon: string;
        forcedExit: string;
    };
    imageUrl: string;
    mapUrl: string;
    status: 'funding' | 'funded' | 'completed';
    progress: number;
}

export const projectsData: ProjectItem[] = [
    {
        id: 'genesis-puebla',
        title: 'Genesis Asset: 20-Hectare Puebla Development',
        status: 'funding',
        progress: 65,
        imageUrl: '/assets/genesis-puebla.jpg',
        mapUrl: '/assets/mapa-genesis.jpg',
        location: {
            short: 'Puebla, MEXICO',
            full: 'Techachalco, Puebla, Mexico (Zip 73998)',
            coordinates: 'Lat 18.962399, Lon -98.194782'
        },
        specs: {
            area: '200,000 m² (20 Hectares)',
            type: 'Land / Territorial Reserve (Mixed Use)',
            pricePerToken: 30.00,
            totalValue: '$6,000,000.00'
        },
        thesis: {
            description: 'Capital appreciation in a strategic growth zone, offering a tangible store of value against crypto market volatility.',
            acquisitionCost: '$500.00 MXN per m²',
            spreadFunction: 'The difference between the peso-based acquisition cost and the dollar-based issuance constitutes the operating capital. This margin funds infrastructure, commercialization, and reserves without exceeding the local commercial retail value (estimated between $1,200 and $3,000 MXN).'
        },
        legal: {
            documentName: 'Management and Transfer of Ownership Trust No. F/4892-8',
            fiduciary: 'Banco Inmobiliario Mexicano (BIM). Fiduciary Division.',
            folio: 'No. 0084519 (Public Property Registry of the State of Puebla)',
            notary: 'Public Deed No. 54,210, Volume 1,204. Public Notary Office No. 14, Puebla Judicial District.'
        },
        tokenomics: {
            ticker: '$RBEK-Chiq',
            parity: '1 $RBEK-Chiq = 1 m² of Land',
            supply: '200,000 tokens',
            distribution: {
                owner: '85.87% - Owner Liquidity Pool (Direct land acquisition)',
                core: '6.00% - FIDUCCI Core Team',
                allies: '3.00% - Partner Program',
                reserve: '5.13% - Operating Reserve (10-Year All-Inclusive)'
            }
        },
        exitStrategy: {
            model: 'Exit/Liquidation Strategy (Appreciation). Capitalizing on land value growth.',
            horizon: '3 to 5 recommended years',
            forcedExit: 'If the asset has not been liquidated after 10 years, an irrevocable instruction triggers a market sale and pro-rata distribution.'
        }
    },
    {
        id: 'torre-reforma',
        title: 'Edificio de Oficinas "Torre Reforma"',
        status: 'funding',
        progress: 82,
        imageUrl: '/assets/proyecto-reforma.png',
        mapUrl: '/assets/mapa-genesis.jpg',
        location: { short: 'CDMX, MEXICO', full: 'Paseo de la Reforma, CDMX', coordinates: 'Lat 19.423, Lon -99.175' },
        specs: { area: '45,000 m²', type: 'Bienes Raíces Comerciales', pricePerToken: 500.00, totalValue: '$45,000,000.00' },
        thesis: { description: 'Prime office space with verified AAA corporate tenants.', acquisitionCost: '$1,000.00 USD per m²', spreadFunction: 'Monthly rents provide steady cash flow.' },
        legal: { documentName: 'Trust No. TR/2023', fiduciary: 'Banorte', folio: 'No. 54321', notary: 'Notary 23, CDMX' },
        tokenomics: { ticker: '$FIDU-OFFICE', parity: '1 Token = 0.001% Equity', supply: '90,000 tokens', distribution: { owner: '80%', core: '10%', allies: '5%', reserve: '5%' } },
        exitStrategy: { model: 'Yield distribution + appreciation', horizon: '10 years', forcedExit: 'Market sale' }
    },
    {
        id: 'parque-solar-sonora',
        title: 'Parque Solar "Desierto de Altar"',
        status: 'funding',
        progress: 45,
        imageUrl: '/assets/proyecto-solar.png',
        mapUrl: '/assets/mapa-genesis.jpg',
        location: { short: 'Sonora, MEXICO', full: 'Desierto de Altar, Sonora', coordinates: 'Lat 30.71, Lon -111.83' },
        specs: { area: '120 Hectares', type: 'Infraestructura de Energía Renovable', pricePerToken: 1500.00, totalValue: '$12,500,000.00' },
        thesis: { description: 'PPA agreements with industrial nearshoring factories.', acquisitionCost: '$10.00 USD per m²', spreadFunction: 'Energy sales to the private grid.' },
        legal: { documentName: 'Trust No. SO/998', fiduciary: 'Invex', folio: 'No. 88912', notary: 'Notary 12, SON' },
        tokenomics: { ticker: '$FIDU-SOLAR', parity: '1 Token = 1 MWh capacity share', supply: '8,333 tokens', distribution: { owner: '70%', core: '15%', allies: '5%', reserve: '10%' } },
        exitStrategy: { model: 'Long-term PPA yields', horizon: '15 years', forcedExit: 'Asset acquisition by energy fund' }
    },
    {
        id: 'arte-maestros-modernos',
        title: 'Colección "Maestros Modernos"',
        status: 'funding',
        progress: 90,
        imageUrl: '/assets/proyecto-art.png',
        mapUrl: '/assets/mapa-genesis.jpg',
        location: { short: 'CDMX, MEXICO', full: 'Vault 4, Polanco', coordinates: 'Lat 19.43, Lon -99.19' },
        specs: { area: '12 Pieces', type: 'Activos Alternativos / Arte', pricePerToken: 250.00, totalValue: '$3,800,000.00' },
        thesis: { description: 'Blue-chip Latin American modern art collection.', acquisitionCost: 'Varies by piece', spreadFunction: 'Capital appreciation derived from scarcity and external valuations.' },
        legal: { documentName: 'Trust No. AR/776', fiduciary: 'Actinver', folio: 'No. 12908', notary: 'Notary 5, CDMX' },
        tokenomics: { ticker: '$FIDU-ART', parity: '1 Token = Fractional Ownership', supply: '15,200 tokens', distribution: { owner: '90%', core: '5%', allies: '0%', reserve: '5%' } },
        exitStrategy: { model: 'Auction / Private Sale', horizon: '5 years', forcedExit: 'Sotheby\'s Liquidation' }
    },
    {
        id: 'flota-logistica',
        title: 'Flota de Carga Logística',
        status: 'funding',
        progress: 30,
        imageUrl: '/assets/proyecto-fleet.png',
        mapUrl: '/assets/mapa-genesis.jpg',
        location: { short: 'Nuevo León, MEXICO', full: 'Monterrey Logistics Hub', coordinates: 'Lat 25.68, Lon -100.31' },
        specs: { area: '50 Freight Trucks', type: 'Equipo Industrial / Arrendamiento', pricePerToken: 100.00, totalValue: '$2,200,000.00' },
        thesis: { description: 'Leasing of heavy transport vehicles for cross-border trade.', acquisitionCost: '$44,000 USD per unit', spreadFunction: 'Leasing contracts provide monthly distributions.' },
        legal: { documentName: 'Trust No. FL/442', fiduciary: 'BBVA', folio: 'No. 33211', notary: 'Notary 8, NL' },
        tokenomics: { ticker: '$FIDU-FLEET', parity: '1 Token = Fleet Share', supply: '22,000 tokens', distribution: { owner: '85%', core: '5%', allies: '5%', reserve: '5%' } },
        exitStrategy: { model: 'Depreciation and partial resale', horizon: '7 years', forcedExit: 'Secondary market auction' }
    },
    {
        id: 'reserva-agave',
        title: 'Reserva Premium de Agave',
        status: 'funding',
        progress: 15,
        imageUrl: '/assets/proyecto-agave.png',
        mapUrl: '/assets/mapa-genesis.jpg',
        location: { short: 'Jalisco, MEXICO', full: 'Tequila Valley', coordinates: 'Lat 20.88, Lon -103.83' },
        specs: { area: '500,000 Plants', type: 'Commodities / Inventario Agrícola', pricePerToken: 50.00, totalValue: '$1,500,000.00' },
        thesis: { description: 'Maturation of export-grade blue agave for premium tequila brands.', acquisitionCost: '$3.00 USD per plant', spreadFunction: 'High appreciation upon biological maturity (Year 6).' },
        legal: { documentName: 'Trust No. AG/101', fiduciary: 'Scotiabank', folio: 'No. 77654', notary: 'Notary 2, JAL' },
        tokenomics: { ticker: '$FIDU-AGAVE', parity: '1 Token = 10 Plants', supply: '30,000 tokens', distribution: { owner: '85%', core: '5%', allies: '5%', reserve: '5%' } },
        exitStrategy: { model: 'Harvest and immediate sale to distilleries', horizon: '6 years', forcedExit: 'Wholesale liquidation' }
    }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
    return projectsData.find(p => p.id === slug);
}

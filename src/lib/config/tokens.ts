// ─── Known RWA Tokens (Arbitrum Sepolia) ───
// Temporary source of truth until a subgraph or backend endpoint is available.
// Replace placeholder addresses with real deployed contract addresses.

export interface TokenConfig {
    tokenAddress: `0x${string}`;
    distributorAddress: `0x${string}` | null;
    name: string;
    symbol: string;
    description: string;
    imageUrl: string;
    yieldAPY: string;
    assetClass: string;
    pricePerToken: number;
}

export const KNOWN_TOKENS: TokenConfig[] = [
    {
        // TODO(deploy): Replace with the real deployed ERC-3643 contract address
        // after running the create-terreno deployment script via FactoryRouter.
        tokenAddress: '0x7892347293847293847293847293847293847293' as `0x${string}`,
        distributorAddress: null,
        name: 'Genesis Puebla',
        symbol: 'GPUE',
        description: 'Mixed Urban Development — Residential & Commercial Hub in Central Puebla.',
        imageUrl: '/assets/genesis-puebla.jpg',
        yieldAPY: '8.5%',
        assetClass: 'Residential-Commercial',
        pricePerToken: 30,
    },
    {
        tokenAddress: '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0' as `0x${string}`,
        distributorAddress: null,
        name: 'Torre Reforma',
        symbol: 'FIDU-OFFICE',
        description: 'Prime commercial real estate with Chainlink CRE verified occupancy and monthly rent flows.',
        imageUrl: '/assets/proyecto-reforma.png',
        yieldAPY: '8.5%',
        assetClass: 'Commercial Real Estate',
        pricePerToken: 500,
    },
    {
        tokenAddress: '0x1234567890abcdef1234567890abcdef12345678' as `0x${string}`,
        distributorAddress: null,
        name: 'Parque Solar "Desierto de Altar"',
        symbol: 'FIDU-SOLAR',
        description: 'Renewable energy infrastructure. IoT sensors report real MWh generation via Chainlink.',
        imageUrl: '/assets/proyecto-solar.png',
        yieldAPY: '11.2%',
        assetClass: 'Energy Infrastructure',
        pricePerToken: 1500,
    },
    {
        tokenAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd' as `0x${string}`,
        distributorAddress: null,
        name: 'Colección "Maestros Modernos"',
        symbol: 'FIDU-ART',
        description: 'Fine art investment fund with verified external appraisals for capital appreciation.',
        imageUrl: '/assets/proyecto-art.png',
        yieldAPY: '15.0%',
        assetClass: 'Alternative / Art',
        pricePerToken: 250,
    },
    {
        tokenAddress: '0x9988776655443322110099887766554433221100' as `0x${string}`,
        distributorAddress: null,
        name: 'Flota de Carga Logística',
        symbol: 'FIDU-FLEET',
        description: 'Industrial transport leasing with automated depreciation calculated via Arbitrum Stylus.',
        imageUrl: '/assets/proyecto-fleet.png',
        yieldAPY: '13.5%',
        assetClass: 'Industrial Equipment',
        pricePerToken: 100,
    },
    {
        tokenAddress: '0x1122334455667788990011223344556677889900' as `0x${string}`,
        distributorAddress: null,
        name: 'Reserva Premium de Agave',
        symbol: 'FIDU-AGAVE',
        description: 'Export-grade commodities with Chainlink CRE certifying physical inventory and maturity.',
        imageUrl: '/assets/proyecto-agave.png',
        yieldAPY: '18.0%',
        assetClass: 'Commodities / Agriculture',
        pricePerToken: 50,
    }
];

/**
 * Lookup a token config by its address (case-insensitive).
 */
export function getTokenConfig(address: string): TokenConfig | undefined {
    return KNOWN_TOKENS.find(
        (t) => t.tokenAddress.toLowerCase() === address.toLowerCase()
    );
}

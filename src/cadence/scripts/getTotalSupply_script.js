export const getTotalSupplyTheFreedom = `
import TheFreedom from 0xc8c5c2718ce30a84;

pub fun main(): UInt64 {

    return TheFreedom.totalSupply;

}
`;

export const getTotalSupplyFourAgreements = `
import FourAgreements from 0xc8c5c2718ce30a84;

pub fun main(): UInt64 {

    return FourAgreements.totalSupply;

}
`;

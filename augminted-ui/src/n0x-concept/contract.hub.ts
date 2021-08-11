import n0xAlphaArtJSON from "../contract-abi/n0xAlphaArt.json";
import { N0xAlphaArt as n0xAlphaArtContract } from "../contract-abi/n0xAlphaArt";
import web3 from "web3";

export const instance = new web3(web3.givenProvider);

// TODO: Include a way to check the allowed chain ids before constructing the contract interface.

export function N0xAlphaArt(
  chainId: number
): n0xAlphaArtContract | undefined {
  const abi: any = n0xAlphaArtJSON.abi;

  const network = (n0xAlphaArtJSON.networks as any)[chainId];
  if (!network) {
    return undefined;
  }

  const address: any = network.address;

  return new instance.eth.Contract(
    abi,
    address
  ) as unknown as n0xAlphaArtContract;
}

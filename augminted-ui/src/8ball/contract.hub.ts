import EightBallFactoryJSON from "../contract-abi/EightBallFactory.json";
import { EightBallFactory as EightBallFactoryContract } from "../contract-abi/EightBallFactory";
import web3 from "web3";

export const instance = new web3(web3.givenProvider);

// TODO: Include a way to check the allowed chain ids before constructing the contract interface.

export function EightBallFactory(
  chainId: number
): EightBallFactoryContract | undefined {
  const abi: any = EightBallFactoryJSON.abi;

  const network = (EightBallFactoryJSON.networks as any)[chainId];
  if (!network) {
    return undefined;
  }

  const address: any = network.address;

  return new instance.eth.Contract(
    abi,
    address
  ) as unknown as EightBallFactoryContract;
}

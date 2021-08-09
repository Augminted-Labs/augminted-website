import EightBallFactoryJSON from "./contract-abi/EightBallFactory.json";
import { EightBallFactory as EightBallFactoryContract } from "./contract-abi/EightBallFactory";
import web3 from "web3";

export const instance = new web3(web3.givenProvider);

// TODO: Error handling for chains that the contract is not available on

export function EightBallFactory(chainId: number): EightBallFactoryContract {
  const abi: any = EightBallFactoryJSON.abi;
  const address: any = (EightBallFactoryJSON.networks as any)[chainId].address;

  return new instance.eth.Contract(
    abi,
    address
  ) as unknown as EightBallFactoryContract;
}

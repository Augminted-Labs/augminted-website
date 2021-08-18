import type { ComponentMeta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import propSets from "prop-sets";

function VariableDemo() {
  return (
    <div className="bg-white">
      <section>
        <h1 className="p100">➡️ Colors</h1>
        <div className="p100 bg-black white">black</div>
        <div className="p100 bg-lemon">lemon</div>
        <div className="p100 bg-cerise">cerise</div>
        <div className="p100 bg-blue white">blue</div>
        <div className="p100 bg-darkgrey white">darkgrey</div>
      </section>
      <section>
        <h1 className="p100">➡️ Font Faces</h1>
        <div className="p100 mie-thin">mie-thin</div>
        <div className="p100 mie-light">mie-light</div>
        <div className="p100 mie">mie</div>
        <div className="p100 mie-bold">mie-bold</div>
        <div className="p100 montserrat">montserrat</div>
      </section>
      <section>
        <h1 className="p100">➡️ Font Sizes</h1>
        <div className="p100 font-size-body">font-size-body</div>
        <div className="p100 font-size-body mie">font-size-body</div>
        <div className="p100 font-size-big">font-size-big</div>
        <div className="p100 font-size-big mie">font-size-big</div>
        <div className="p100 font-size-title">font-size-title</div>
        <div className="p100 font-size-title mie">font-size-title</div>
      </section>
      <section>
        <h1 className="p100">➡️ Layouts</h1>
        <div className="flex-row items-baseline gap100">
          <div className="bg-cerise p50">p50</div>
          <div className="bg-cerise p100">p100</div>
          <div className="bg-cerise p200">p200</div>
          <div className="bg-cerise p300">p300</div>
          <div className="bg-cerise p400">p400</div>
        </div>
        <div className="flex-row items-baseline gap100">
          <div className="bg-blue white m50">m50</div>
          <div className="bg-blue white m100">m100</div>
          <div className="bg-blue white m200">m200</div>
          <div className="bg-blue white m300">m300</div>
          <div className="bg-blue white m400">m400</div>
        </div>
      </section>
      <section>
        <h1 className="p100">➡️ Elements</h1>
        <p className="p100">
          <code>&lt;p&gt;</code> Darkslide Bucky Lasek crail grab bank nose
          blunt nollie. Switch nose blunt Mike Carroll coping nose grab mini
          ramp. Half-flip egg plant judo air handplant wheels. Blunt 360 coffin
          Japan air egg plant. Hang ten nose slide S.K.A.T.E. poseur hard flip
          wall ride. Slappy bluntslide sick chicken wing gnar bucket. Crail grab
          wheels impossible mongo nosegrind. Kevin Harris ollie hole cab flip
          Venice alley oop nose grab. Casper front foot impossible nose bump
          tic-tac quarter pipe. Locals full pipe birdie kickturn hand rail Vans.
          Hanger backside salad grind nosegrind Hugh Bod Boyle Japan air.
          Transition poseur Alternative Sports pump layback snake. Downhill yeah
          regular footed boardslide ollie north.
        </p>
        <ul className="p100">
          <li>&lt;ul&gt;</li>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </section>
    </div>
  );
}

export default {
  title: "Demo/Variables",
} as ComponentMeta<typeof VariableDemo>;

export const Default: Story = (args) => <VariableDemo {...args} />;

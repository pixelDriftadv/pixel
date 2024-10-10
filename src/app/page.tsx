import RetroGrid from '@/components/ui/retro-grid';
import Image from 'next/image';

export default function Home() {
  const avatarDecorations = [
    { url: '/air.png', id: 1 },
    { url: '/akuma.png', id: 2 },
    { url: '/angry.png', id: 3 },
    { url: '/balance.png', id: 4 },
    { url: '/bloodthirsty.png', id: 5 },
    { url: '/snowglobe.png', id: 5 },
    { url: '/stardust.png', id: 5 },
    { url: '/stinkums.png', id: 5 },
    { url: '/toast.png', id: 5 },
    { url: '/shocked.png', id: 5 },
    { url: '/selyne.png', id: 5 },
    { url: '/ufo.png', id: 5 },
    { url: '/water.png', id: 5 },
    { url: '/winkle.png', id: 5 },
    { url: '/sakura.png', id: 5 },
    { url: '/shurikens_mask.png', id: 5 },
    { url: '/skull_medallion.png', id: 5 },
    { url: '/solar_orbit.png', id: 5 },
    { url: '/zombie_food.png', id: 5 },
    { url: '/sakura.png', id: 5 },
    { url: '/blade_storm.png', id: 5 },
    { url: '/astronaut_helmet.png', id: 5 },
    { url: '/chromawave.png', id: 5 },
    { url: '/clyde_invaders.png', id: 5 },
    { url: '/cypher_neural_theft.png', id: 5 },
    { url: '/crossbones.png', id: 5 },
    { url: '/cozy_cat.png', id: 5 },
    { url: '/confetti_vaporwave.png', id: 5 },
    { url: '/disxcore_headset.png', id: 5 },
    { url: '/dog_1.png', id: 5 },
    { url: '/dragons_smile.png', id: 5 },
    { url: '/dusk_and_dawn.png', id: 5 },
    { url: '/flaming_sword.png', id: 5 },
    { url: '/forest.png', id: 5 },
    { url: '/frag_out.png', id: 5 },
    { url: '/ghosts.png', id: 5 },
    { url: '/glitch.png', id: 5 },
    { url: '/hood_crimson.png', id: 5 },
    { url: '/im_a_clown.png', id: 5 },
    { url: '/lightning.png', id: 5 },
    { url: '/mokoko.png', id: 5 },
    { url: '/minions.png', id: 5 },
    { url: '/morning_coffee.png', id: 5 },
    { url: '/new_year.png', id: 5 },
    { url: '/new_year.png', id: 5 },
    { url: '/oasis.png', id: 5 },
    { url: '/omens_cowl.png', id: 5 },
    { url: '/oni_mask.png', id: 5 },
    { url: '/pal_sphere.png', id: 5 },
    { url: '/pancakes.png', id: 5 },
    { url: '/patrick_star.png', id: 5 },
    { url: '/pink_hyper_helmet.png', id: 5 },
    { url: '/pipedream.png', id: 5 },
    { url: '/pink_smoke.png', id: 5 },
    { url: '/pumpkin_spice.png', id: 5 },
    { url: '/reynas_leer.png', id: 5 },
    { url: '/rage.png', id: 5 },
    { url: '/radiating_energy.png', id: 5 },
    { url: '/pink_futuristic_ui.png', id: 5 },
    { url: '/ryu.png', id: 5 },
    { url: '/sakura_ukon.png', id: 5 },
    { url: '/scallywag.png', id: 5 },
    { url: '/sakura_warrior.png', id: 5 },
    { url: '/slither_n_snack.png', id: 5 },
    { url: '/spirit_embers.png', id: 5 },
    { url: '/spongebob.png', id: 5 },
    { url: '/spooky_cat_ears.png', id: 5 },
    { url: '/starry_eyed.png', id: 5 },
    { url: '/straw_hat.png', id: 5 },
    { url: '/strawberry_vine.png', id: 5 },
    { url: '/street_fighter_6_battle_field.png', id: 5 },
    { url: '/string_lights.png', id: 5 },
    { url: '/sakura_gyoiko.png', id: 5 },
    { url: '/sweat_drops.png', id: 5 },
    { url: '/teacup_blue.png', id: 5 },
    { url: '/teacup_orange.png', id: 5 },
    { url: '/teacup_pink.png', id: 5 },
    { url: '/teacup_red.png', id: 5 },
    { url: '/the_petal_pack.png', id: 5 },
    { url: '/the_petal_pack.png', id: 5 },
    { url: '/torgal_puppy.png', id: 5 },
    { url: '/treasure_and_key.png', id: 5 },
    { url: '/valorant_champions_2024.png', id: 5 },
    { url: '/victory_crown.png', id: 5 },
    { url: '/viper_poison_cloud.png', id: 5 },
    { url: '/warp_helmet.png', id: 5 },
    { url: '/wingman_boba.png', id: 5 },
    { url: '/witch_hat_midnight.png', id: 5 },
    { url: '/witch_hat_plum.png', id: 5 },
    { url: '/wolf_morph.png', id: 5 },
    { url: '/zombie_food_purple.png', id: 5 },
    { url: '/yoru_dimensional_drift.png', id: 5 },
    { url: '/los_santos.png', id: 5 },
  ];
  return (
    <main className=" h-auto min-h-screen w-full bg-black flex flex-col justify-center py-24">
      <div className="pb-20 h-auto w-full flex flex-col items-center justify-center text-center">
        <h1 className=" pb-2 text-base font-semibold text-white text-center">
          <span className=" font-extrabold">New updates rolling out soon!</span>
        </h1>
        <h1 className=" pb-12 text-base font-semibold text-white/60 text-center">
          <span className=" font-semibold">
            (heyya send friend requests on discord yo)
          </span>
        </h1>
        <Image
          src={'/ss.png'}
          alt="screenshot"
          width={1920}
          height={1080}
          className="w-80 h-auto rounded-2xl border-2 border-white"
        />
      </div>
      <div className="h-auto w-full p-6 bg-white/0 flex flex-col items-center justify-center">
        {/* <div className="h-auto w-full p-6">
          <h1 className=" pb-12 text-4xl font-semibold text-white text-center">
            Why to join <span className=" font-extrabold">PixelDrift</span>?
          </h1>
          <h1 className=" pb-12 text-2xl font-medium text-white text-center">
            A social media to use{' '}
            <span className=" font-extrabold">Discord inspired</span> avatar
            decorations on your profile for no cost at all
          </h1>
        </div> */}

        {/* <div>
          <div className=" h-auto w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
            {avatarDecorations.map((decoration, index) => {
              return (
                <div
                  className=" h-36 w-36 m-2 mt-0 bg-black/10 flex items-center justify-center"
                  key={index}
                >
                  <Image
                    src={'/avatar/logo_pixels.png'}
                    alt="avatar"
                    width={100}
                    height={100}
                    unoptimized
                    className=" h-20 w-20 relative rounded-full"
                  />
                  <Image
                    src={decoration.url}
                    alt="decoration"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-24 w-24 absolute"
                  />
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </main>
  );
}

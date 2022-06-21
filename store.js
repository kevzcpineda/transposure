import create from 'zustand'

export const useStore = create(set => ({
    /* States */
    count2: 0,
    kevin: "kevin",
    destination:[{
        lat:null,
        long:null,
    }],
    desti:[],
    /* function */
    increasecount2: () => set(state => {
        state.count2 = state.count2 + 1;
    }),
    changeKevin: (kev) => set(state => {
        state.kevin = kev;
    }),
    setlat: (lat) => set(state => {
        state.destination.lat = lat;
    }),
    setlong: (long) => set(state => {
        state.destination.long = long;
    }),
    setdesti: (kev) => set(state => {
        state.desti = kev;
    }),

}));


import create from 'zustand'

export type ThemeI = 'dark' | 'light'

type State = {
  theme: ThemeI
  updateTheme: (theme: ThemeI) => void
}

export const useStore = create<State>((set) => ({
  theme: 'dark',
  updateTheme: (updateValue: ThemeI) => set(() => ({ theme: updateValue })),
}))

export default useStore

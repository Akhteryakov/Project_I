type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    // ...Object.entries(mods)
    //   .filter(([className, value]) => Boolean(value))
    //   .map(([classNames, value]) => classNames),
    ...Object.keys(mods).filter((key) => mods[key]),
  ].join(" ");
}

classNames("remove-btn", { hovered: true, selectable: true, red: false }, [
  "withPadding",
]);

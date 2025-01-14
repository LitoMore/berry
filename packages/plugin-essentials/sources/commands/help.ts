// eslint-disable-next-line arca/no-default-export
export default (clipanion: any) => clipanion

  .command(`help [...command]`)
  .describe(`print the program usage`)

  .action(async ({command, ...rest}: {command: Array<string>, rest: {[key: string]: any}}) => {
    if (command.length > 0) {
      return await clipanion.run(null, [...command, `-h`], rest);
    } else {
      return await clipanion.run(null, [`-h`], rest);
    }
  });

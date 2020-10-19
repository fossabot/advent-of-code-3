function part1(opcodes: number[]): number[] {
  opcodes[1] = 12;
  opcodes[2] = 2;

  for (let i = 0; i < opcodes.length; i += 4) {
    const opcode = opcodes[i];
    const inputA = opcodes[opcodes[i + 1]];
    const inputB = opcodes[opcodes[i + 2]];
    const outputIndex = opcodes[i + 3];

    if (opcode === 1) {
      opcodes[outputIndex] = inputA + inputB;
    } else if (opcode === 2) {
      opcodes[outputIndex] = inputA * inputB;
    } else if (opcode === 99) {
      break;
    } else {
      console.log('Invalid input');
    }
  }

  return opcodes;
}

export { part1 };
// Tipo litera

type ordenStatus = "pending" | "shipped" | "delivered";

let ordenstatus: ordenStatus = "pending";

// Enum

enum LogLevel {
  Info = "Info",
  Warding = "Warding",
  Error = "Error",
}

let message: string = "error en la base de dato";

function LogMessage(leveltype: LogLevel, message: String): void {
  return console.log(`[${leveltype}]:${message}`);
}
LogMessage(LogLevel.Info, message);

<?php
// ---------------------------
// Part 1: Object-Oriented PHP
// ---------------------------

// Abstract class Operation
abstract class Operation {
    protected $x;
    protected $y;

    public function __construct($x, $y) {
        $this->x = $x;
        $this->y = $y;
    }

    abstract public function operate();
    abstract public function getEquation();
}

// Addition subclass
class Addition extends Operation {
    public function operate() {
        return $this->x + $this->y;
    }

    public function getEquation() {
        return "{$this->x} + {$this->y} = " . $this->operate();
    }
}

// Subtraction subclass
class Subtraction extends Operation {
    public function operate() {
        return $this->x - $this->y;
    }

    public function getEquation() {
        return "{$this->x} - {$this->y} = " . $this->operate();
    }
}

// Multiplication subclass
class Multiplication extends Operation {
    public function operate() {
        return $this->x * $this->y;
    }

    public function getEquation() {
        return "{$this->x} × {$this->y} = " . $this->operate();
    }
}

// Division subclass
class Division extends Operation {
    public function operate() {
        if ($this->y == 0) {
            return "Error: Cannot divide by zero.";
        }
        return $this->x / $this->y;
    }

    public function getEquation() {
        if ($this->y == 0) {
            return "Division by zero is undefined.";
        }
        return "{$this->x} ÷ {$this->y} = " . $this->operate();
    }
}

// ---------------------------
// Part 2: POST Handling
// ---------------------------

$result = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $x = $_POST["x"] ?? null;
    $y = $_POST["y"] ?? null;

    if (isset($_POST["add"])) {
        $operation = new Addition($x, $y);
    } elseif (isset($_POST["subtract"])) {
        $operation = new Subtraction($x, $y);
    } elseif (isset($_POST["multiply"])) {
        $operation = new Multiplication($x, $y);
    } elseif (isset($_POST["divide"])) {
        $operation = new Division($x, $y);
    }

    if (isset($operation)) {
        $result = $operation->getEquation();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 6 Calculator</title>
</head>
<body>
    <h1>Simple PHP Calculator (OOP)</h1>
    <form method="POST">
        <label for="x">First Number:</label>
        <input type="number" name="x" id="x" required><br><br>

        <label for="y">Second Number:</label>
        <input type="number" name="y" id="y" required><br><br>

        <button type="submit" name="add">Add</button>
        <button type="submit" name="subtract">Subtract</button>
        <button type="submit" name="multiply">Multiply</button>
        <button type="submit" name="divide">Divide</button>
    </form>

    <h2>Result:</h2>
    <pre id="result"><?php echo htmlspecialchars($result); ?></pre>

    <!-- Debugging info (optional) -->
    <!-- <?php var_dump($_POST); ?> -->
</body>
</html>

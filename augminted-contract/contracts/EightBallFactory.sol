pragma solidity >=0.4.22 <0.9.0;

contract EightBallFactory {
    event EightBallAdded(uint256 ballId, string question, string answer);

    struct EightBall {
        string question;
        string answer;
    }

    EightBall[] private eightballs;
    mapping(uint256 => address) private EightBallToOwner;

    function askQuestion(string memory _str) public {
        uint256 randNonce = 0;
        string memory randomAnswer;
        uint256 random = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender, randNonce))
        ) % 8;
        if (random == 0) {
            randomAnswer = "Yes";
        } else if (random == 1) {
            randomAnswer = "No";
        } else if (random == 2) {
            randomAnswer = "Maybe";
        } else if (random == 3) {
            randomAnswer = "NGMI";
        } else if (random == 4) {
            randomAnswer = "WAGMI";
        } else if (random == 5) {
            randomAnswer = "If you say so";
        } else if (random == 6) {
            randomAnswer = "Fuck Yes";
        } else if (random == 7) {
            randomAnswer = "Fuck No";
        } else {
            randomAnswer = "Fuck up";
        }
        eightballs.push(EightBall(_str, randomAnswer));
        uint256 id = eightballs.length;
        EightBallToOwner[id] = msg.sender;
        emit EightBallAdded(id, _str, randomAnswer);
    }

    string bless = "bless";

    function _fetchAnswer() public view returns (string memory) {
        return bless;
    }
}

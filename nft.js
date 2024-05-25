// Create a variable to hold your NFTs
let nfts = [];


// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, dateCreated, description) {
    const nft = {
        name: name,
        artist: artist,
        dateCreated: dateCreated,
        description: description
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Artist: " + nfts[i].artist);
        console.log("Date Created: " + nfts[i].dateCreated);
        console.log("Description: " + nfts[i].description);
        console.log("--------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line

// Mint some NFTs
mintNFT("Digital Sunrise", "Alice Smith", "2023-05-01", "A beautiful digital painting of a sunrise.");
mintNFT("Virtual Reality", "Bob Johnson", "2023-06-15", "An immersive VR experience artwork.");
mintNFT("Pixelated Dreams", "Carol White", "2023-07-30", "A pixel art piece reminiscent of 8-bit games.");

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total Supply: " + getTotalSupply());

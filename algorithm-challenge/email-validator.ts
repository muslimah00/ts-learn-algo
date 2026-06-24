function simpleEmailCheck(email: string): boolean {
    // Step by step
    console.log("Checking:", email);
    
    if (!email.includes("@")) {
        console.log("❌ Missing @");
        return false;
    }
    console.log("✅ Has @");
    
    if (!email.includes(".")) {
        console.log("❌ Missing .");
        return false;
    }
    console.log("✅ Has .");
    
    let atPos = email.indexOf("@");
    let dotPos = email.indexOf(".");
    
    if (dotPos < atPos) {
        console.log("❌ Dot is before @");
        return false;
    }
    console.log("✅ Dot is after @");
    
    console.log("🎉 VALID EMAIL!");
    return true;
}

// Test these:
simpleEmailCheck("john@gmail.com");
simpleEmailCheck("john@gmail");
simpleEmailCheck("john.doe@com");
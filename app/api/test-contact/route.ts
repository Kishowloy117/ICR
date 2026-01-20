import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log the received data (you can see this in terminal)
    console.log("📧 Form Submission Received:");
    console.log("==========================");
    console.log("Name:", body.name);
    console.log("Email:", body.email);
    console.log("Company:", body.company);
    console.log("Message:", body.message);
    console.log("Has File:", !!body.file);
    if (body.file) {
      console.log("File Name:", body.file.name);
      console.log("File Type:", body.file.contentType);
      console.log("File Size:", body.file.content.length, "bytes");
    }
    console.log("Submitted At:", body.submittedAt);
    console.log("==========================\n");

    // Simulate successful submission
    return NextResponse.json(
      {
        success: true,
        message: "Test submission received successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing test submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process submission",
      },
      { status: 500 }
    );
  }
}

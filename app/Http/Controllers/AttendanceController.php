<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    public function get_account_attendance(Request $request)
    {

        $attendance = Attendance::where([['userid', '=', $request->userid], ['date2', '=', $request->date2]])->get();

        if (count($attendance) == 0) {
            for ($i = 0; $i < count($request->data); $i++) {
                Attendance::create([
                    'userid' => $request->userid,
                    'branchid' => $request->branchid,
                    'date2' => $request->date2,
                    'date3' => $request->data[$i]['date']
                ]);
            }
        }

        $newData = Attendance::where([['userid', '=', $request->userid], ['date2', '=', $request->date2]])->get();
        return response()->json([
            'status' => $newData,
            'message' => 'Updated Successfully!'
        ]);
    }

    public function get_branch_attendance(Request $request)
    {
        $attendance = Attendance::where([['branchid', '=', $request->branchid], ['date', '=', $request->date]])->with('user')->get();
        return response()->json([
            'status' => $attendance,
            'message' => 'Updated Successfully!'
        ]);
    }

    public function check_attendance(Request $request)
    {
        // Update the date
        Attendance::where('id', $request->id)->update([
            $request->updateWhere => $request->date,
        ]);

        // Fetch the updated attendance record
        $attendance = Attendance::find($request->id);

        // Initialize the total duration in seconds
        $totalDurationInSeconds = 0;

        // Define pairs of check-in and check-out
        $pairs = [
            ['am_in', 'am_out'],
            ['pm_in', 'pm_out'],
            ['am2_in', 'am2_out'],
            ['pm2_in', 'pm2_out'],
        ];

        foreach ($pairs as $pair) {
            $checkIn = Carbon::parse($attendance->{$pair[0]} ?? now());
            $checkOut = Carbon::parse($attendance->{$pair[1]} ?? now());

            // Calculate duration for each check-in/check-out pair
            $totalDurationInSeconds += $checkIn->diffInSeconds($checkOut);
        }

        // Format the total duration as "HH:mm"
        $formattedTotalDuration = gmdate("H:i", $totalDurationInSeconds);

        // Update the total column
        Attendance::where('id', $request->id)->update([
            'total' => $formattedTotalDuration,
            'date'=>$request->dateNow,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Updated Successfully!',
        ]);
    }


}

package co.gov.corpocaldas.AccessLayerRequest.controller;

import co.gov.corpocaldas.AccessLayerRequest.dto.RequestAccessDto;
import co.gov.corpocaldas.AccessLayerRequest.service.RequestAccessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/request-access")
public class RequestAccessController {

    @Autowired
    private RequestAccessService requestAccessService;

    @PostMapping()
    public ResponseEntity<RequestAccessDto> saveRequestAccess(@RequestBody RequestAccessDto requestAccess) {
        return new ResponseEntity<>(requestAccessService.saveRequestAccess(requestAccess), HttpStatus.CREATED);
    }

    @PutMapping("/{requestAccessId}")
    public ResponseEntity<RequestAccessDto> updateRequestAccess(@PathVariable("requestAccessId") int requestAccessId, @RequestBody RequestAccessDto requestAccess) {
        return new ResponseEntity<>(requestAccessService.updateRequestAccess(requestAccessId, requestAccess), HttpStatus.ACCEPTED);
    }

    @GetMapping("/waiting-for-approval")
    public ResponseEntity<List<RequestAccessDto>> getRequestWaitingForApproval() {
        return new ResponseEntity<>(requestAccessService.requestWaitingForApproval(), HttpStatus.OK);
    }

    @PostMapping("/validate-access")
    public ResponseEntity<RequestAccessDto> validateAccess(@RequestParam("layerId") int layerId, @RequestParam("accessToken") String accessToken, @RequestParam("email") String email) {
        return new ResponseEntity<>(requestAccessService.validateAccess(layerId, email, accessToken), HttpStatus.ACCEPTED);
    }
}
